export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
