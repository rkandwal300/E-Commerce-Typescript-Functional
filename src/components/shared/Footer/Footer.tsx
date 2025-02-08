import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { memo } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

let Footer = () => {
  return (
    <div className="selection:bg-primary/60 text-sm flex justify-center items-center flex-col  bg-slate-600 text-background">
      <div className="max-w-6xl w-full p-4 flex gap-4 justify-between">
        <div className="w-full grid grid-rows-2">
          <div className="flex flex-col gap-4">
            <h5 className="text-2xl font-medium">Custom Print Store</h5>

            <div className="flex">
              <Button variant={'ghost'} className="hover:text-primary">
                <FaInstagram size={20} />
              </Button>
              <Button variant={'ghost'} className="hover:text-primary">
                <FaTwitter size={20} />
              </Button>
              <Button variant={'ghost'} className="hover:text-primary">
                <FaLinkedinIn size={20} />
              </Button>
              <Button variant={'ghost'} className="hover:text-primary">
                <FaFacebook size={20} />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-2xl font-medium"> Quick Links</h5>
            <ul className="text-sm font-thin list-none ">
              <li>Know More About Us</li>
              <li>Visit US</li>
              <li>Lets Connect</li>
            </ul>
          </div>
        </div>
        <div className="w-full grid grid-rows-2">
          <div className="flex flex-col gap-4">
            <h5 className="text-2xl font-medium">Get in Touch with Us.</h5>
            <p className="font-thin">
              We deliver high quality custom design, logos or desired prints.
              Feel free to contact on our main site or by our social media
              handles.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-2xl font-medium">Important Links</h5>
            <ul className="text-sm font-thin list-none ">
              <li>Know More About Privacy Policy</li>
              <li>Visit Shipping Details</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="max-w-2xl w-full py-4 flex justify-between gap-2">
        <span>Copyright © 2022 | TryCasuals </span>

        <span> Powered By TryCasuals </span>
      </div>
    </div>
  );
};

export default memo(Footer);
