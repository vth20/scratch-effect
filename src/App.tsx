import Scratch from "./components/Scratch";
import Content from "./components/content";
import "./app.css";
import { useCallback, useMemo } from "react";

function App() {
  const listImages = useMemo(() => {
    return [
      "https://media.gettyimages.com/id/542028515/vector/museum-of-modern-art-new-york-usa.jpg?s=1024x1024&w=gi&k=20&c=FX8JSnPGv1DGU3okfRDlBgwQr1Ls3uzZ3H7divzma7Q=",
      "https://media.gettyimages.com/id/148278692/photo/almond-branches-in-bloom-by-vincent-van-gogh.jpg?s=1024x1024&w=gi&k=20&c=t9q4lqCjoxAs8fKJf_yyipu4ARlR2gtjMGZALaeHce4=",
      "https://media.gettyimages.com/id/1199903380/vector/wheat-field-with-cypresses.jpg?s=1024x1024&w=gi&k=20&c=NUuxzTTxWexbVDLW-xczgJaL9Itm89oVRrfCoOJ8rcY=",
      "https://media.gettyimages.com/id/544182662/photo/the-night-cafe-by-vincent-van-gogh.jpg?s=1024x1024&w=gi&k=20&c=nXB0j9-bGzm11dIeTOOvjTJKgPbCKfx40_FoP8JyS2M=",
      "https://media.gettyimages.com/id/542028515/vector/museum-of-modern-art-new-york-usa.jpg?s=1024x1024&w=gi&k=20&c=FX8JSnPGv1DGU3okfRDlBgwQr1Ls3uzZ3H7divzma7Q=",
      "https://media.gettyimages.com/id/148278692/photo/almond-branches-in-bloom-by-vincent-van-gogh.jpg?s=1024x1024&w=gi&k=20&c=t9q4lqCjoxAs8fKJf_yyipu4ARlR2gtjMGZALaeHce4=",
      "https://media.gettyimages.com/id/1199903380/vector/wheat-field-with-cypresses.jpg?s=1024x1024&w=gi&k=20&c=NUuxzTTxWexbVDLW-xczgJaL9Itm89oVRrfCoOJ8rcY=",
      "https://media.gettyimages.com/id/544182662/photo/the-night-cafe-by-vincent-van-gogh.jpg?s=1024x1024&w=gi&k=20&c=nXB0j9-bGzm11dIeTOOvjTJKgPbCKfx40_FoP8JyS2M=",
      "https://media.gettyimages.com/id/542028515/vector/museum-of-modern-art-new-york-usa.jpg?s=1024x1024&w=gi&k=20&c=FX8JSnPGv1DGU3okfRDlBgwQr1Ls3uzZ3H7divzma7Q=",
    ];
  }, []);
  const onCompleteHandler = useCallback(() => {
    console.log(`Completed`);
  }, []);
  return (
    <div className="app">
      <div className="grid-container">
        {listImages.map((url, id) => {
          return (
            <Scratch
              key={url + id}
              content={<Content />}
              layer={url}
              style={{
                width: 300,
                height: 300,
                border: "3px solid yellow",
                borderRadius: id === 4 ? "50%" : "",
              }}
              finishPercent={75}
              onComplete={onCompleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
