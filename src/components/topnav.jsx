const topNav = () => {
  return (
    <div className="topNav">
      <li>
        <Link to="/">Billy Bobs Tech for Less</Link>
      </li>
      <li>
        <Link to="/TopDeals">Top Deals</Link>
      </li>
      <li>
        <Link to="/Computers">Computers</Link>
      </li>
      <li>
        <Link to="/Phones">Phones</Link>
      </li>
      <li>
        <Link to="/Audio">Audio</Link>
      </li>
      <li>
        <Link to="/Security">Security</Link>
      </li>

    </div>
  );
};

export default topNav
