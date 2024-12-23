// Susigeneruosime HTML struktura panaudodami arrow funkcija
const generateHTML = () => {
  document.body.innerHTML = `
    <div id="snow-container"></div>
    <div id="greeting">
      <h1>Linksmu Kaledu!</h1>
      <p>Kaledu be sniego nebuna</p>
      <button id="start-snowing">Let it snow</button>
    </div>
    `;
};

// Susigeneruosime CSS struktura panaudodami arrow funkcija
const applyStyles = () => {
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100vh';
  document.body.style.background = '#4276a2';
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';

  // pasistilizuosiu snow container:
  const SnowContainer = document.getElementById('snow-container');
  SnowContainer.style.position = 'absolute';
  SnowContainer.style.top = '0';
  SnowContainer.style.left = '0';
  SnowContainer.style.width = '100%';
  SnowContainer.style.height = '100%';
  SnowContainer.style.pointerEvents = 'none';
};

// Susikuriu snaiges objektus:
const snowflakes = [];

// Funkcija, kuri sugeneruos daug snaigiu objektu:
const createSnowflake = () => {
  return {
    x: Math.random() * window.innerWidth, // narsykles ekrano plotis
    y: Math.random() * -50,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 3 + 1,
  };
};

// Funkcija, kuri prides naujas snaiges i musu masyva:
const addSnowflake = () => {
  const snowflake = createSnowflake();
  snowflakes.push(snowflake);
};

// Funkcija, kuri atnaujins snaiges pozicija ekrane:
const updateSnowflakes = () => {
  snowflakes.forEach((flake) => {
    flake.y += flake.speed;
    if (flake.y > window.innerHeight) {
      flake.y = Math.random() * -50;
      flake.x = Math.random() * window.innerWidth;
    }
  });
};

// Funkcija, kuri atvaizduos snaiges DOM'e:
const renderSnowflakes = () => {
  const container = document.getElementById('snow-container');
  container.innerHTML = '';

  // paleisk per visa masyva si cikla
  // kiekviena karta kai suksis ciklas, i konteineri bus ideta snaige
  snowflakes.forEach((flake) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.backgroundColor = 'white';
    div.style.borderRadius = '50%';
    div.style.width = `${flake.size}px`;
    div.style.height = `${flake.size}px`;
    div.style.left = `${flake.x}px`;
    div.style.top = `${flake.y}px`;
    container.appendChild(div);
  });
};

// Funkcija, kuri prades sniega:
const startSnowing = () => {
  setInterval(() => {
    addSnowflake();
    updateSnowflakes();
    renderSnowflakes();
  }, 50);
};

// Idedu abi funkcijas is virsaus i vienos funkcijos vidu:
const initPage = () => {
  generateHTML();
  applyStyles();

  // Mygtuko paspaudimas
  const button = document.getElementById('start-snowing');

  button.addEventListener('click', () => {
    startSnowing();
  });
};

initPage();
