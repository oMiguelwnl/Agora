import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Estudante | Universidade de Cambridge",
    comment:
      "Tive o prazer de explorar o Ágora, um site que oferece uma extensa gama de cursos sobre vários tópicos relacionados a tecnologia. Fiquei profundamente impressionado com minha experiência, pois o site oferece uma seleção abrangente de cursos que atendem a diferentes níveis de habilidade e interesses. Se você está procurando aprimorar seu conhecimento e habilidades na indústria de tecnologia, recomendo muito conferir o Ágora!",
  },
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Desenvolvedora Full Stack | Quarter Ltd.",
    comment:
      "Obrigado pelo seu incrível canal de tutoriais de programação! Seu estilo de ensino é excepcional, e a qualidade dos seus tutoriais é de primeira linha. Sua capacidade de dividir tópicos complexos em partes gerenciáveis e cobrir diversas linguagens de programação e tópicos é verdadeiramente impressionante. As aplicações práticas e exemplos do mundo real que você incorpora reforçam o conhecimento teórico e fornecem insights valiosos. Seu envolvimento com o público promove um ambiente de aprendizado colaborativo. Agradeço pela sua dedicação, expertise e paixão pelo ensino de programação, e continue com o trabalho fantástico!",
  },
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Estudante de Engenharia de Sistemas Computacionais | Zimbábue",
    comment:
      "Obrigado pelo seu incrível canal de tutoriais de programação! Seu estilo de ensino é excepcional, e a qualidade dos seus tutoriais é de primeira linha. Sua capacidade de dividir tópicos complexos em partes gerenciáveis e cobrir diversas linguagens de programação e tópicos é verdadeiramente impressionante. As aplicações práticas e exemplos do mundo real que você incorpora reforçam o conhecimento teórico e fornecem insights valiosos. Seu envolvimento com o público promove um ambiente de aprendizado colaborativo. Agradeço pela sua dedicação, expertise e paixão pelo ensino de programação, e continue com o trabalho fantástico!",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Desenvolvedora Web Júnior | Indonésia",
    comment:
      "Tive o prazer de explorar o Ágora, um site que oferece uma extensa gama de cursos sobre vários tópicos relacionados a tecnologia. Fiquei profundamente impressionado com minha experiência.",
  },
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Desenvolvedora Full Stack | Argélia",
    comment:
      "Seu conteúdo é muito especial. O que eu mais gostei é que os vídeos são tão longos, o que significa que cobrem tudo em detalhes. Por isso, qualquer pessoa com nível iniciante pode completar um projeto integrado ao assistir aos vídeos. Muito obrigado. Estou muito animada para os próximos vídeos. Continue fazendo esse trabalho incrível!",
  },
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Desenvolvedora Full Stack | Canadá",
    comment:
      "Junte-se ao Ágora! O Ágora foca em aplicações práticas, em vez de apenas ensinar a teoria por trás das linguagens de programação ou frameworks. Fiz uma aula sobre a criação de um marketplace web usando React JS, e foi muito útil para me ensinar as diferentes etapas envolvidas na criação de um projeto do início ao fim. No geral, recomendo muito o Ágora para quem deseja melhorar suas habilidades de programação e construir projetos práticos. O Ágora é um ótimo recurso que ajudará você a levar suas habilidades para o próximo nível.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assets/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Nossos Estudantes São{" "}
            <span className="text-gradient">Nossa Força</span> <br /> Veja o que
            Eles Dizem Sobre Nós
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
