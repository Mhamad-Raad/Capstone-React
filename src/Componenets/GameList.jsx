

export default function GameList({Done, Games}) {

  return (
    <div >
      {Done ? (
        Games.map((item) => {
          return <div key={item.id}> {item.title}</div>;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
