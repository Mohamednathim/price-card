
import './App.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
</style>

function App() {
  //Array of objects data to pass arguments
  //To invoke the function....
  const card = [
    {
      header: "FREE",
      sub_header: "$0/month",
      list_1: "✅ Single User",
      list_2: "✅ 5GB Storage",
      list_3: "✅ Unlimited Public Projects",
      list_4: "✅ Community Access",
      list_5: <option disabled>❌ Unlimited Private Projects</option>,
      list_6: <option disabled>❌ Dedicated Phone Support</option>,
      list_7: <option disabled>❌ Free Subdomain</option>,
      list_8: <option disabled>❌ Monthly Status Reports</option>
    },
    {
      header: "PLUS",
      sub_header: "$5/month",
      list_1: "✅ 5 User",
      list_2: "✅ 50GB Storage",
      list_3: "✅ Unlimited Public Projects",
      list_4: "✅ Community Access",
      list_5: "✅ Unlimited Private Projects",
      list_6: "✅ Dedicated Phone Support",
      list_7: "✅ Free Subdomain",
      list_8: <option disabled>❌ Monthly Status Reports</option>
    }, {
      header: "PRO",
      sub_header: "$49/month",
      list_1: "✅ Unlimited User",
      list_2: "✅ 150GB Storage",
      list_3: "✅ Unlimited Public Projects",
      list_4: "✅ Community Access",
      list_5: "✅ Unlimited Private Projects",
      list_6: "✅ Dedicated Phone Support",
      list_7: "✅ Free Subdomain",
      list_8: "✅ Monthly Status Reports"
    }
  ]
  return (
    <div className="App">
      {/* Title of the cards... */}
      <h4 className="animate-character" id="title">💲PRICING CARD</h4>
      {/* map method is used to get the data dynamically from the array of objects... */}
      {card.map((data, index) => (
        <PriceCard
          key={index}
          title={data.header}
          sub_title={data.sub_header}
          list_1={data.list_1}
          list_2={data.list_2}
          list_3={data.list_3}
          list_4={data.list_4}
          list_5={data.list_5}
          list_6={data.list_6}
          list_7={data.list_7}
          list_8={data.list_8}
        />
      ))}
    </div>
  );
}

export default App;

//PriceCard functional components:-

function PriceCard({ title, sub_title, list_1, list_2, list_3, list_4, list_5, list_6, list_7, list_8 }) {
  return (
    <div className="container">
      <div className="cards">
        <p className="headers">{title}</p>
        <p className="sub-headers">{sub_title}</p>
        <hr></hr>
        <ul>
          <li>{list_1}</li>
          <li>{list_2}</li>
          <li>{list_3}</li>
          <li>{list_4}</li>
          <li>{list_5}</li>
          <li>{list_6}</li>
          <li>{list_7}</li>
          <li>{list_8}</li>
        </ul>
        <div>
          <button className="footer-btn" type="button">BUTTON</button>
        </div>
      </div>
    </div>
  );
}