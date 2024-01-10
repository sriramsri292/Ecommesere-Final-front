import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
    <img
       
        src="https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?w=996&t=st=1704715073~exp=1704715673~hmac=13b47f791e486d730ad37b8031fe6ad735b18aebef048fed55de1222f6789f62"
        alt="Card"
        height={300}  // Adjust the height as needed
    />
    <div className="card-img-overlay d-flex align-items-center">
        <div className="container">
            <h5 className="card-title fs-1 text-black fw-lighter" style={{height:'40px',fontSize:'60px',fontWeight:'bolder'}}>New Season Arrivals</h5>
           
           

        </div>
    </div>
</div>

      </div>
    </>
  );
};

export default Home;
