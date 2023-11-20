interface Props {
    personagem: any;
  }
  
  export default function Ataques({ personagem }: Props) {
    return (
      <>
        <div className="flex justify-evenly">
            <h1>Ataques</h1>
            <h1 className="w-1/6">Bonus no teste de ataque</h1>
            <h1 className="w-1/6">Dano</h1>
            <h1 className="w-1/6">Crítico</h1>
            <h1 className="w-1/6">Tipo</h1>
            <h1 className="w-1/6">Alcance</h1>
        </div>
      </>
    );
  }
  