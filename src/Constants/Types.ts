export type Person = {
  name: { first: string };
  picture: {
    thumbnail: string;
  };
};

export type PersonCardProps = {
  avatar: string;
  name: string;
  text: string;
};
export type InitialSelectedPerson = {
  photo: string;
  title: string;
};
