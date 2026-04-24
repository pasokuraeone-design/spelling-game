import { createClient } from '@supabase/supabase-js';

// Vercel serverless function (Node.js)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { code, name, password, isAdmin } = req.body;
  if (!code || !name || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // service role key must be set in Vercel env
  const supabase = createClient(supabaseUrl, serviceKey);

  const email = `${code.trim()}@spelling-game.app`;
  try {
    // admin.createUser は service role キーでのみ使用可能
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        student_code: code.trim(),
        display_name: name.trim(),
        is_admin: isAdmin,
      },
    });
    if (error) throw error;

    // プロフィールは admin ユーザー作成時に metadata が自動で入りますが、
    // 必要に応じて profiles テーブルへの upsert も行っておく
    await supabase.from('profiles').upsert({
      id: data.user.id,
      student_code: code.trim(),
      display_name: name.trim(),
      is_admin: isAdmin,
    });

    return res.status(200).json({ message: 'Student created' });
  } catch (e: any) {
    console.error('Create student error', e);
    return res.status(500).json({ error: e.message ?? 'Unknown error' });
  }
}
