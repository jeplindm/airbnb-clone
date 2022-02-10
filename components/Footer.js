const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-y-10 md:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a awesome clone</p>
        <p>Referral accepted</p>
        <p>JM</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>JMDev</p>
        <p>Get more information</p>
        <p>Visit our community</p>
        <p>Host responsibility</p>
        <p>Become a host</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Cancellation</p>
        <p>Covid-19 news</p>
        <p>Rescue information</p>
      </div>
    </footer>
  );
};

export default Footer;
