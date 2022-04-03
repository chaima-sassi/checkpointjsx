import logo from './logo.svg';
import './App.css';
import image1 from "./myImage.png"

function App() {
  return (
   
      <div style={{borderSolid:"1px black",maxWidth:"100vw"}}>

         <h1 className='title red' >chaima</h1>

        <br/>

       <img src={image1} alt='myImage'/>

       <br/>

       <img src="/image2.jpg" alt='image2' />
<br/>

       <iframe width="320" height="240" src="https://www.youtube.com/embed/J7Iz5060PUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );
}

export default App;
