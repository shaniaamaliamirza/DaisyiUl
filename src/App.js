import logo from './logo.svg';
// import background from "./background.jpg";
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <main>
    <div className="navbar bg-base-100" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>HOME</a></li>
        <li><a>MENU</a></li>
        <li><a>CONTACT</a></li>
        <li><a>CART</a></li>
      </ul>
    </div>
    <img src="../logo/logo.jpg" alt="logo" style={{
      width:"90px",
      height:"90px"
    }}
    />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>HOME</a></li>
      <li><a>MENU</a></li>
      <li><a>CONTACT</a></li>
      <li><a>CART</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">LOGOUT</a>
  </div>
</div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-6">
        Selamat Datang Di Toko kami, Kami disini menjual berbagai macam jenis kue kering.
      </p>
    </div>
  </div>
</div>
</main>
  );
}

export default App;
