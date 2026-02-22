import { useEffect, useState } from "react";
import api from "../../api/api";

const Cases = () => {
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    api.get("/cases").then((res) => {
      setCases(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Cases</h2>
      {cases.map((c) => (
        <div key={c.id}>
          {c.case_number} - {c.title}
        </div>
      ))}
    </div>
  );
};

export default Cases;
