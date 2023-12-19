const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '70px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '130px',
      right: '-60px',
      rotate: '30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '70px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '165px',
      right: '-10px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '70px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '260px',
      right: '-35px',
      rotate: '-60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '70px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '200px',
      right: '-60px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '150px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '270px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div style={{ height: '10px', width: '200px', background: 'black' }} />
    </div>
  );
}
