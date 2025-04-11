
import { Link } from "react-router-dom";
import "./Home.css"



function Home() {
  const cards = [
    { title: 'Emails', text: 'See more...', link: '/emails' },
    { title: 'NotFound', text: 'This is card 2', link: '/notfound'  },
    { title: 'NotFound', text: 'This is card 3', link: '/notfound'  },
    { title: 'NotFound ', text: 'This is card 4', link: '/notfound'  },
    { title: 'NotFound', text: 'This is card 5', link: '/notfound'  },
    { title: 'NotFound', text: 'This is card 6', link: '/notfound'  },
  ];

    return (
     <>
   <div className="home-container">
      <h2>🎴 Responsive Cards</h2>
      <div className="grid">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <h4>{card.title}</h4>
            <p>{card.text}</p>
            <Link to={card.link} ><button> Go to</button></Link>
            
          </div>
        ))}
      </div>
    </div>
   
     </>
    );
  }
  
  export default Home;