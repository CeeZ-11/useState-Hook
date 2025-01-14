import Gallery from "./Gallery.jsx";
import Form from "./Form.jsx";
import FeedBackForm from "./FeedbackForm.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Gallery</h1>
      <div className="Gallery">
        <Gallery />
        <Gallery />
      </div>
      <h1>Form Input</h1>
      <div className="Form">
        <Form />
      </div>
      <h1>Feedback Form</h1>
      <div className="FeedbackForm">
        <FeedBackForm />
      </div>
    </>
  );
}
