import React from 'react';
import { CardsWrapper, CustomCardWrapper } from './ourInitiatives.styles';
import Title from '../../components/.global/title';
import Card from '../card';

import IconLabs from '@assets/icon-labs.png';
import IconTalk from '@assets/icon-talk.png';

function OurInitiatives() {
  return (
    <>
      <section
        id="nossas-iniciativas"
        aria-label="Nossas iniciativas"
        style={{
          margin: 'auto',
          maxWidth: '1440px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            marginTop: '2.56rem',
          }}
        >
          <Title
            as="h2"
            color="#001633"
            size={48}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
          >
            Nossas iniciativas
          </Title>
        </div>
        <CardsWrapper>
          <CustomCardWrapper>
            <Card
              width={598}
              height={267}
              marginBlock="0"
              title="SouJunior Labs"
              description={
                <>
                  Coloque em prática suas expertises em projetos reais, e ganhe
                  experiência no mercado de trabalho.
                </>
              }
              titleSize={24}
              titleColor="#003986"
              titleListWeight={600}
              descriptionSize={16}
              descriptionWeight={400}
              descriptionColor="#000000"
              imageSrc={IconLabs}
              imageHeight={235}
              imageWidth={235}
              flexDirection="row-reverse"
              buttonText="Acesse"
              buttonVariant="outline"
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            />
          </CustomCardWrapper>
          <CustomCardWrapper>
            <Card
              width={598}
              height={267}
              marginBlock="0"
              title="SouJunior Talk"
              description={
                <>
                  Se você está procurando uma maneira de aprimorar seu inglês
                  com pessoas reais, temos uma excelente notícia para você!
                </>
              }
              titleSize={24}
              titleColor="#003986"
              titleListWeight={520}
              descriptionSize={16}
              descriptionWeight={400}
              descriptionColor="#000000"
              imageSrc={IconTalk}
              imageHeight={235}
              imageWidth={235}
              flexDirection="row-reverse"
              buttonText="Acesse"
              buttonVariant="outline"
              onClick={() =>
                window.open(
                  'https://discord.com/invite/564CDre9F3',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            />
          </CustomCardWrapper>
        </CardsWrapper>
      </section>
    </>
  );
}

export default OurInitiatives;
