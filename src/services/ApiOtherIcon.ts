import { OtherIconData } from "../components/post/btn-actions/othericon";
import otherIconData from "../types/otherIconData";


class OtherIconPic {
    forEach: any;
    async get(): Promise<otherIconData[]> {
      console.log("starting second fetch...");
      const value: otherIconData[] = await new Promise((resolve) => {
        setTimeout(() => resolve(OtherIconData), 3000);
      });
      return value;
    }
  }
  
  export default new OtherIconPic();