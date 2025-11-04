const Bottom = () => {
  const fullyear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {fullyear} Developed by MANIVANNAN P.</p>
    </footer>
  );
};

export default Bottom;
