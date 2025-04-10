
import { Link } from "react-router-dom";
import "./Home.css"



function Home() {
  const cards = [
    { title: 'Emails', text: 'This....', link: '/emails' },
    { title: 'Card 2', text: 'This is card 2', link: '/notfound'  },
    { title: 'Card 3', text: 'This is card 3', link: '/notfound'  },
    { title: 'Card 4', text: 'This is card 4', link: '/notfound'  },
    { title: 'Card 5', text: 'This is card 5', link: '/notfound'  },
    { title: 'Card 6', text: 'This is card 6', link: '/notfound'  },
  ];

    return (
     <>
   <div className="home-container">
      <h2>🎴 Responsive Cards with CSS Grid</h2>
      <div className="grid">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <h4>{card.title}</h4>
            <p>{card.text}</p>
            <Link to={card.link} ><button> See More</button></Link>
            
          </div>
        ))}
      </div>
    </div>
   
     </>
    );
  }
  
  export default Home;