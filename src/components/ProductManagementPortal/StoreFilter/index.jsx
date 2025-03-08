import "./index.css";
function StoreFilter({ stores, selectedStore, setSelectedStore }) {
  return (
    <div className="store-filter">
      <label>Filter by Store: </label>
      <select
        value={selectedStore}
        onChange={(e) => setSelectedStore(e.target.value)}
      >
        <option value="">All Stores</option>
        {stores.map((store) => (
          <option key={store} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StoreFilter;
