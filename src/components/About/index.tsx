import Image from "next/image";
import { BiAward, BiSupport, BiBriefcaseAlt, BiFile } from "react-icons/bi";
import { useWindowSize } from "src/hooks/useWindowSize";

import * as S from "./styles";

const About = () => {
  const { height, width } = useWindowSize();
  return (
    <S.Main id="#home">
      <div>
        height: {height}px <br />
        width: {width}px
        <h1>About me</h1>
        <p>My introduction</p>
      </div>
      <div>
        <div>
          <Image
            style={{ borderRadius: "24px", filter: "grayscale(100)" }}
            src="https://i.ibb.co/J2fjwP1/image.png"
            alt=""
            height={300}
            width={300}
          />
        </div>
        <div>
          <div>
            <BiAward />
            <p>Experience</p>
            <span>1 + Years</span>
          </div>
          <div>
            <BiBriefcaseAlt />
            <p>Completed</p>
            <span>3 + Projects</span>
          </div>
          <div>
            <BiSupport />
            <p>Support</p>
            <span>Online 24/7</span>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            mollitia excepturi voluptates iste debitis quaerat doloremque neque
            cumque itaque nobis, omnis tenetur suscipit quo possimus ipsum
            obcaecati ratione provident et.
          </p>

          <a
            href="https://drive.google.com/file/d/1HSIDjJnJygJ30smZGR08eVXqlLDtN6Ym/view?usp=sharing"
            download
          >
            Download CV <BiFile />
          </a>
        </div>
      </div>
    </S.Main>
  );
};

export { About };
