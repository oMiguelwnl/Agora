import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        O que é <span className="text-gradient">Ágora?</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Está pronto para levar suas habilidades de programação para o próximo
          nível? Não procure mais, pois a Ágora é a comunidade de programação
          líder dedicada a ajudar novos programadores a alcançar seus objetivos
          e atingir seu pleno potencial.
          <br />
          <br />
          Como fundador e CEO da Ágora, conheço de perto os desafios que vêm com
          o aprendizado e crescimento na indústria de programação. Por isso
          criei a Ágora – para fornecer aos novos programadores os recursos e o
          suporte de que precisam para ter sucesso.
          <br />
          <br />
          Nosso canal no YouTube é um verdadeiro tesouro de vídeos informativos
          sobre tudo, desde o básico da programação até técnicas avançadas. Mas
          isso é apenas o começo. Nossos cursos acessíveis são projetados para
          oferecer a educação de alta qualidade necessária para ter sucesso na
          indústria, sem comprometer o orçamento.
          <br />
          <br />
          Na Ágora, acreditamos que o preço nunca deve ser uma barreira para
          alcançar seus sonhos. É por isso que nossos cursos são precificados de
          forma acessível – para que qualquer pessoa, independentemente de sua
          situação financeira, possa acessar as ferramentas e o conhecimento
          necessários para ter sucesso.
          <br />
          <br />
          Mas a Ágora é mais do que uma comunidade – somos uma família. Nossa
          comunidade solidária de indivíduos com pensamentos semelhantes está
          aqui para ajudar você em cada passo do caminho, seja você um iniciante
          ou esteja procurando levar suas habilidades para o próximo nível.
          <br />
          <br />
          Com a Ágora ao seu lado, não há nada que impeça você de conquistar seu
          emprego dos sonhos. Nossos cursos e nossa comunidade fornecerão a
          orientação, suporte e motivação de que você precisa para liberar seu
          pleno potencial e se tornar um programador habilidoso.
          <br />
          <br />
          Então, o que está esperando? Junte-se à família Ágora hoje e vamos
          conquistar juntos a indústria de programação! Com nossos cursos
          acessíveis, vídeos informativos e comunidade solidária, o céu é o
          limite.
        </p>
        <br />
        <span className="text-[22px]">Miguel</span>
        <h5 className="text-[18px] font-Poppins">Fundador e CEO da Ágora</h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
