const topNav = () => {
  return (
    <div className="topNav">
      <li>
        <Link to="/">Billy Bobs Tech for Less</Link>
      </li>
      <li>
        <Link to="/topDeals">Top Deals</Link>
      </li>
      <li>
        <Link to="/computers">Computers</Link>
      </li>
      <li>
        <Link to="/phones">Phones</Link>
      </li>
      <li>
        <Link to="/audio">Audio</Link>
      </li>
      <li>
        <Link to="/security">Security</Link>
      </li>

    </div>
  );
};

export default topNav
