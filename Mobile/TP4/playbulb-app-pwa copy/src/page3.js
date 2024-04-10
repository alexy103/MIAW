import React, { useState, useRef, useEffect } from "react";
import styles from "./styles";

const Page3 = ({ device, onSelect }) => {
  const [stream, setStream] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [currentColor, setCurrentColor] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("restart");
  }, [currentColor]);
  console.log("Chargement de la page 3");

  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log(stream);
      setStream(stream);
      console.log(videoRef);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.log(error);
    }
  };

  const stopVideoStream = () => {
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  const captureFrame = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    // stopVideoStream(); a activer si on veut arreter le flux
  };

  // retourne la couleur r,g,b sous forme de chaine de caractères type HTML SANS #
  const rgbToHex = (r, g, b) => {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const sendData = (color) => {
    device.gatt
      .getPrimaryService(0xff02)
      .then((service) => service.getCharacteristic(0xfffc))
      .then((characteristic) => characteristic.writeValue(color));
  };

  const handleColorButtonClick = (color) => {
    let colorData = new Uint8Array(4);
    colorData[0] = 0; // always 0
    colorData[1] = parseInt(color.slice(0, 2), 16); // red
    colorData[2] = parseInt(color.slice(2, 4), 16); // green
    colorData[3] = parseInt(color.slice(4, 6), 16); //
    console.log(colorData);
    sendData(colorData);
  };

  // calcule la couleur moyenne calculée sur 1/5 de l'image au centre, en augmentant la saturation.
  // blockSize : le pas utilisé pour passer d'un pixel à l'autre,
  //  si blockSize = 1 on utilise tous les pixels, si la valeur est
  //  supérieure, on prend moins de pixels en compte et le calcul est plus rapide
  const getDominantColorFromImage = (id, blockSize = 1) => {
    console.log(
      "Appel de la fonction de calcul couleur majoritaire version image"
    );
    let i = -4,
      r = 0,
      g = 0,
      b = 0,
      fr = 0.0,
      fg = 0.0,
      fb = 0.0,
      count = 0;

    var image = document.getElementById(id);
    var canvas = document.createElement("canvas");

    // on calcule la géometrie pour pouvoir recuperer 1/5 de l'image au centre
    var w = Math.round(image.width / 10);
    var h = Math.round(image.height / 10);
    canvas.width = 2 * w;
    canvas.height = 2 * h;
    var ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      4 * w,
      4 * h,
      2 * w,
      2 * h,
      0,
      0,
      canvas.width,
      canvas.height
    );
    var pix = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    const length = pix.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      fr += pix[i];
      fg += pix[i + 1];
      fb += pix[i + 2];
    }
    console.log(fr, fg, fb);
    fr /= count;
    fg /= count;
    fb /= count;

    const min = Math.min(fr, fg, fb);
    const max = Math.max(fr, fg, fb);
    const gain = max / (max - min);

    r = Math.floor((fr - min) * gain);
    g = Math.floor((fg - min) * gain);
    b = Math.floor((fb - min) * gain);

    console.log(rgbToHex(r, g, b));
    setCurrentColor("#" + rgbToHex(r, g, b));
    handleColorButtonClick(rgbToHex(r, g, b));
  };

  // calcule la couleur moyenne calculée sur 1/5 de l'image au centre, en augmentant la saturation.
  // blockSize : le pas utilisé pour passer d'un pixel à l'autre,
  //  si blockSize = 1 on utilise tous les pixels, si la valeur est
  //  supérieure, on prend moins de pixels en compte et le calcul est plus rapide
  const getDominantColorFromCanvas = (canvasId, blockSize) => {
    console.log(
      "Appel de la fonction de calcul couleur majoritaire version canvas"
    );
    let i = -4,
      r = 0,
      g = 0,
      b = 0,
      fr = 0.0,
      fg = 0.0,
      fb = 0.0,
      count = 0;

    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    const w = Math.round(canvas.width / 10);
    const h = Math.round(canvas.height / 10);

    const pix = ctx.getImageData(4 * w, 4 * h, 2 * w, 2 * h).data;
    const length = pix.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      fr += pix[i];
      fg += pix[i + 1];
      fb += pix[i + 2];
    }

    fr /= count;
    fg /= count;
    fb /= count;

    const min = Math.min(fr, fg, fb);
    const max = Math.max(fr, fg, fb);
    const gain = max / (max - min);

    r = Math.floor((fr - min) * gain);
    g = Math.floor((fg - min) * gain);
    b = Math.floor((fb - min) * gain);

    console.log(rgbToHex(r, g, b));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the selected file
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Methodes pour capture de photo</h1>
      <h2>
        Vous devez vous decider pour l'une ou l'autre de ces deux methode pour
        votre application
      </h2>

      <h2>Methode 1</h2>
      <h3>Comportement sur un smartphone :</h3>
      <p>
        <em>l'application de prise de vue par defaut est demarré</em>, vous
        pouvez prendre une photo ou en selectionner une depuis la gallerie.
      </p>
      <h3>Comportement sur un ordinateur :</h3>
      <p>
        On ne peut que charger une image depuis le systeme de fichier, mais cela
        permet d'utiliser de images tests avec des couleurs bien marquées.
      </p>
      <p>
        Tester sur ordinateur et sur smartphone après un build de production
      </p>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleFileSelect}
      />
      <br />
      <img id="img1" src={imageURL} width="200" alt="Selected image" />

      <p>
        Le bouton suivant est pour tester l'extraction de la couleur majoritaire
        du centre de la photo (qui est dans une img)
        <br />
        Voir sujet PDF pour plus d'informations
      </p>
      <button onClick={() => getDominantColorFromImage("img1", 4)}>
        Couleur majoritaire
      </button>
      <div
        id="color_result1"
        style={{
          backgroundColor: currentColor,
          width: "200px",
          height: "200px",
        }}
      ></div>

      {/* <h2>
        Methode 2 pour prendre une photo, demarrage d'un flux video caché et
        snapshot lorsqu'on clique sur le bouton
      </h2>

      <div>
        Pour tester la capture depuis un flux. Il faut demarrer l'acquisition
        (autorisation), le flux video et caché, est une action sur snap recupere
        une photo depuis le flux video:
        <div>
          <video ref={videoRef} autoPlay hidden />
          <canvas id="canvas1" ref={canvasRef} />
        </div>
        <button onClick={startVideoStream}>
          Start Video Stream (but not visible)
        </button>
        <button onClick={captureFrame}>"Grab frame..."</button>
      </div>
      <p>
        Remarque : le flux vidéo peut etre demarré au chargement de la page, et
        être rendu visible
      </p>

      <p>
        Le bouton suivant est pour tester l'extraction de la couleur majoritaire
        du centre de la photo (qui est dans un canvas)
        <br />
        Voir sujet PDF pour plus d'informations
      </p>
      <button onClick={() => getDominantColorFromCanvas("canvas1", 4)}>
        Couleur majoritaire
      </button>
      <div id="color_result2"></div> */}
    </div>
  );
};

export default Page3;
