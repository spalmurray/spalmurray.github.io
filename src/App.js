import './output.css';

function App() {
  return (
    <div class="px-20 py-10">
      <div class="w-3/4">
        <h1 class="pl-10 text-2xl mb-5">Spencer Murray</h1>
        
      </div>
      <div>
        <p class="mb-5">Howdy!</p>
        <p class="mb-5">I'm a guy from Canada who likes to make stuff, learn, and have fun.</p>
        <p>Please feel free to get in touch with me for any reason!</p>
      </div>
      <div class="container flex flex-wrap my-5">
        <a href="https://github.com/spalmurray" class="px-2 py-1 mx-2 my-2 border text-white bg-github transition hover:drop-shadow-lg">GitHub</a>
        <a href="https://www.linkedin.com/in/spalmurray/" class="px-2 py-1 mx-2 my-2 border text-white bg-linkedin transition hover:drop-shadow-lg">LinkedIn</a>
        <p class="inline text-center px-2 py-1 mx-2 my-2 border bg-gray-200">spalmurray everywhere else!</p>
      </div>
      <h3 class="text-lg mt-10">Cool things I've made:</h3>
      <div class="container flex flex-wrap my-2">
        <a class="px-2 py-1 mx-2 my-2 border bg-gray-200 transition hover:drop-shadow-lg" href="https://github.com/spalmurray/wordle-bot">wordle-bot</a>
        <a class="px-2 py-1 mx-2 my-2 border bg-gray-200 transition hover:drop-shadow-lg" href="https://www.spalmurray.com/wordle-helper">wordle-helper</a>
        <a class="px-2 py-1 mx-2 my-2 border bg-gray-200 transition hover:drop-shadow-lg" href="https://newt.social">Newt</a>
      </div>
    </div>
  );
}

export default App;
