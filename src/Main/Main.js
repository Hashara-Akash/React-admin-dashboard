import "./Main.css";



const Main = () => {
  return (
    <main>
      <div className="main__container">
        

        <div className="main__title">
          
          <div className="main__greeting">
            <h1>Hello!!</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        
        <div className="main__cards">
          <div className="card">
            
            <div className="card_inner">
              <p className="text-primary-p">Completed Projects </p>
              <span className="font-bold text-title">+100</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Emloyees</p>
              <span className="font-bold text-title">150</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Global Projects</p>
              <span className="font-bold text-title">+50</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Clients</p>
              <span className="font-bold text-title">+20</span>
            </div>
          </div>
        </div>
       
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Bluechip Colombo, Sri Lanka</p>
                <p>Bluechip Cupertino, California, USA</p>
                <p>Bluechip London, United Kindom</p>
                <p>Bluechip Colombo, Sri Lanka</p>
                <p>Bluechip Cupertino, California, USA</p>
                <p>Bluechip Wuhan, China</p>
                <p>Bluechip Tokiyo, Japan</p>
                <p>Bluechip Hong Kong</p>
                <p>Bluechip London, United Kindom</p>
                <p>Bluechip Cupertino, California, USA</p>
                

              </div>
             
            </div>
            
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Colombo, Sri Lanka</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$275,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$324,200</p>
              </div>

              <div className="card3">
                <h1>Companies</h1>
                <p>11</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>24</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Main;