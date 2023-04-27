import { default as postData } from "../types/postData";
import { postdata } from "../components/post/postdata";

class PostData {
  forEach: any;
  async get(): Promise<postData[]> {
    console.log("starting fetch...");
    const value: postData[] = await new Promise((resolve) => {
      setTimeout(() => resolve(postdata), 3000);
    });
    return value;
  }
}

export default new PostData();