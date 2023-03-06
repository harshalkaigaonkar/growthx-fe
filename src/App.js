import { useState, useEffect } from "react";

export default function App() {
  const [res, setRes] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://mock-backend-for-interns.rahulyadav45.repl.co/users"
      ).then((res) => res.json());
      setRes(response.users);
    })();
  }, []);

  return (
    <div className="mt-5 flex flex-wrap justify-center gap-10">
      {res &&
        res.map((item) => (
          <section
            key={item._id}
            className="w-[350px] flex flex-col justify-center"
          >
            <img
              className="w-[350px] h-[350px] rounded-md"
              src={item.profile_picture}
              alt="profile"
            />
            <div className="mt-4 flex flex-col grow">
              <p className="w-full font-bold text-xl">
                {item.name.first} {item.name.last}
              </p>
              <p className="mt-1 w-full text-xs font-light">{item.location}</p>
              <p className="mt-4 w-full font-light">{item.about}</p>
              <p
                style={{
                  whiteSpace: "pre-wrap"
                }}
                className="mt-4 text-sm font-light"
              >
                {item.profession.join(" · ")}
              </p>
            </div>
            <div className="mt-4 w-full flex justify-center">
              <button className="mt-2 p-2 w-32 border-2 border-black">
                More
              </button>
            </div>
          </section>
        ))}
    </div>
  );
}
