import Link from "@/components/atoms/Link";
import { Dropdown } from "./dropdown";

const Navigation = ({ info }) => {

  if (!info.IsDropdown) {
    const data = {
      Page: info.Href,
      Label: info.Title,
    };
    return (
      <div className="flex flex-col justify-center">
        <Link info={data} />
      </div>
    );
  }
  return <Dropdown info={info} />
};

export { Navigation };
