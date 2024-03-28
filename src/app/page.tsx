import { ExampleForm } from '@/components';
import { db } from '@/server/db';

export default async function Home() {
  const items = await db.query.test.findMany();
  return (
    <section>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>I am working</p>
      <ExampleForm />
    </section>
  );
}
