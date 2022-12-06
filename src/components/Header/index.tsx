import * as S from "./styles";

const list = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Skills",
    path: "#skills",
  },
  {
    label: "Portfolio",
    path: "#portfolio",
  },
  {
    label: "Experience",
    path: "#experience",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

const Header = () => {
  return (
    <S.Header>
      <div>
        <h2>John</h2>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.label}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </S.Header>
  );
};

export { Header };
