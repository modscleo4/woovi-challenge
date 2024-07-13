import './style.css';

interface ListProps extends React.PropsWithChildren<{}> {

}

export default function List({ children }: ListProps) {
  return (
    <ul className="list">{children}</ul>
  );
}
