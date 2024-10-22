const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <h1>
          Created By <i>Manish Kumar Verma</i> @ {year}
        </h1>
      </div>
    </>
  );
};

export default Footer;
