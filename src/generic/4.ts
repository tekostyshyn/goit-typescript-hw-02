/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
  title: string
}

class Component<T> {
  constructor(public props: T) {
  }
}

class Page extends Component<IProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export { };