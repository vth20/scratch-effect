# Scratch Card Effect

## Overview
This project is a customizable scratch card effect built with React and TypeScript. It allows users to create interactive scratch-off cards with various customization options such as overlays, completion callbacks, and card shapes.

## Features
- **Custom Scratch Overlay:** Use an image or url as the scratch-off layer.
- **OnComplete Callback:** Trigger a function when a certain percentage of the layer is scratched off.
- **Custom Card Shapes:** Define unique shapes for the scratch card.
- **Brush Customization:** Adjust the size and appearance of the brush used for scratching.
- **Responsive & Mobile-Friendly:** Works seamlessly on both desktop and mobile devices.

## Installation

Clone the repository and install dependencies:
```sh
git clone <repo-url>
cd scratch-card-app
npm install
```

## Usage
Import and use the `ScratchCard` component in your React application:
```tsx
import ScratchCard from "./components/ScratchCard";

const App = () => {
  const handleComplete = () => {
    console.log("Scratch card fully revealed!");
  };

  return (
    <ScratchCard
      content={<div>Congratulations! You won!</div>}
      layer="/path-to-overlay-image.png"
      onComplete={handleComplete}
      style={{ width: 300, height: 200 }}
    />
  );
};

export default App;
```

## Props
## Props

| Prop            | Type                     | Default  | Description |
|----------------|--------------------------|----------|-------------|
| `content`      | `ReactElement`            | `-`      | The content inside the scratch card. |
| `layer`        | `File \| string`          | `-`      | The scratchable overlay, can be an image file or a URL. |
| `style`        | `CSSProperties`           | `{}`     | Custom styles for the scratch card container. |
| `className`    | `string`                  | `""`     | Additional class names for styling. |
| `finishPercent` | `number`                 | `-`     | The percentage of the scratched area required to trigger `onComplete`. |
| `onComplete`   | `() => void` | `-` | Callback function executed when the scratched area reaches `finishPercent`. |
| `revealThreshold` | `number`               | `1`     | The percentage of the scratched area required to start revealing the content. |

## Customization

### Adjusting Scratch Completion Threshold
You can define a specific percentage of scratching required before triggering `onComplete`:
```tsx
<Scratch onComplete={() => {
  console.log("Completed")
}} />
```

## Demo
![Scratch Card Demo](./src//assets/demo.gif)

## Author
Developed by @vth20

