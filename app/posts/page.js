import Image from 'next/image';

export default function PostPage({}) {
  return (
    <div>
      <h1>Posts Pages</h1>
      {/* <h2>{todo.title}</h2> */}

      <div>
        <Image
          src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
          width={500}
          height={500}
          alt="Next.js"
        />
      </div>
    </div>
  );
}

// Fetch data using getServerSideProps
// export async function getServerSideProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const todo = await response.json();

//   return {
//     props: {
//       todo,
//     },
//   };
// }
