
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-wrapper text-center p-3 border-t-[1px]">
      <p>© {currentYear} Inventory Management. All rights reserved.</p>
    </div>
  )
}

export default Footer