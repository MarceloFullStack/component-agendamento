import styled from "styled-components";

const Container = styled.html`
  font-size: 62.5%;
  background-color: #ffffff;
  position: relative;
  min-height: 100%;

  body {
    font-family: "Noto Sans", sans-serif;
    color: black;
    margin: 0;
    font-size: 1.4rem;
    line-height: initial;
  }
`;
const AppointmentPopup = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 12rem;
  left: 25%;
  width: 90rem;
  max-width: 90%;
  background: white;
  border-radius: 1rem;
  z-index: 1;
  display: flex;
  overflow: hidden;
  min-height: 50rem;
  max-height: 65rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    top: 0;
    border-radius: 0;
    overflow: auto;
    height: calc("100% - 6.4rem");
    min-height: auto;
    max-height: 100%;
  }
`;

const AppointmentUserWrapper = styled.div`
  background: #fff;
  flex: 125rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
  }
`;

const UserAvatar = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  position: absolute;
  top: 0%;
  left: -40%;

  @media screen and (max-width: 768px) {
    flex: 0 0 35%;
    padding-bottom: 35%;
  }
`;

const AppointmentUser = styled.div`
  padding: 2rem 2rem 0 2rem;
  background: #666;

  @media screen and (max-width: 768px) {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
    flex-direction: column;
  }
`;

const Username = styled.span`
  color: #ffffff;
  font-size: 1.8rem;
`;
const Specialization = styled.span`
  color: white;
  font-size: 1.3rem;
  display: block;
  margin-top: 0.5rem;
`;
const Notation = styled.span`
  display: flex;
  margin-top: 0.5rem;

  span {
    padding: 0.25rem !important;

    &:before {
      content: @fa-var-star;
      font-family: "Font Awesome 5 Pro";
      font-weight: bold;
      color: fadeOut(white, 50%);
      display: block;
    }
  }

  &.five span:nth-child(-n + 5):before,
  &.four span:nth-child(-n + 4):before,
  &.three span:nth-child(-n + 3):before,
  &.two span:nth-child(-n + 2):before,
  &.one span:nth-child(-n + 1):before {
    color: #ee5181;
  }
`;

const AppointmentLocation = styled.div`
  padding: 2rem 0;
  margin: 2rem;
  border-top: 1px solid fadeOut(white, 50%);
  p {
    color: fadeOut(white, 50%);
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
const AppointmentCalendar = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  .currentWeek {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    border-bottom: 1px solid gray;
    align-items: center;

    & > span {
      font-size: 2rem;
      color: #2d3152;

      i {
        color: #ee5181;
        margin-right: 0.5rem;
        opacity: 0.5;
      }
    }

    .calendarNav {
      button {
        border: none;
        background: transparent;
        padding: 0;
        font-size: 0;
        cursor: pointer;

        &:before {
          font-family: "Font Awesome 5 Pro";
          font-size: 2rem;
          padding: 0 1.5rem;
          display: block;
        }

        &.prev {
          &:before {
            content: "seta";
          }
        }

        &.next {
          &:before {
            content: "@fa-var-chevron-right";
          }
        }
      }

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        .calendarNav button:before {
          padding: 0 1rem;
          font-size: 1.2rem;
        }

        & > span {
          font-size: 1.5rem;
        }
      }
    }
  }

  .calendarWrapper {
    display: flex;
    flex-direction: column;
    height: 100%;

    .calendarWeek {
      border-bottom: 1px solid gray;

      ul {
        padding: 0;
        list-style: none;
        display: flex;
        width: 100%;
        margin: 0;

        li {
          width: 100%;
          padding: 1.5rem 0;
          text-align: center;
          color: black;
        }
      }
    }

    .calendarHours {
      overflow: auto;
      margin: 0 -2rem;
      padding: 1rem 2rem;
      height: 100%;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      & > ul {
        display: flex;

        & > li {
          width: 100%;
          text-align: center;

          & > ul > li {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 3.5rem;
            color: blue;
            cursor: pointer;
            padding: 0.5rem;

            &.empty {
              &:hover {
                background: none;
                box-shadow: none;
              }

              &:before {
                content: "";
                width: 1.5rem;
                margin: 0 auto;
                height: 0.5rem;
                background: gray;
                display: block;
              }
            }

            &:hover,
            &.active {
              background: #ee5181;
              border-radius: 1rem;
              color: white;
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }
  }

  .calendarButtons {
    display: flex;
    border-top: 1px solid gray;
    margin: 0 -2rem;

    button {
      cursor: pointer;
      outline: none;
      background: transparent;
      width: 100%;
      border: none;
      font-size: 1.5rem;
      padding: 2rem;
      color: darker-gray;
      letter-spacing: 1px;

      &:hover {
        background: gray;
      }

      &.validation {
        background: #ee5181;
        color: #ffffff;

        &:hover {
          background: darken(#ee5181, 5%);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;

    .calendarWrapper {
      .calendarHours {
        padding: 0;
        margin: 0;

        & > ul > li > ul > li {
          padding: 1rem 0 0.75rem 0;
          font-size: 1.2rem;
        }
      }
    }

    .calendarButtons {
      margin: 0;
    }
  }
`;

const Footer = styled.footer`
  font-size: 12px;
  margin: auto;
  width: 100%;
  bottom: 0;
  position: fixed;
  left: 50%;
  margin-bottom: 10px;
`;

export default function Agendamento() {
  return (
    <Container>
      <AppointmentPopup>
        <AppointmentUserWrapper>
          <UserAvatar>
            <Img src="https://conteudo.imguol.com.br/c/entretenimento/0c/2019/10/08/terapia-1570554701000_v2_900x506.jpg.webp" />
          </UserAvatar>

          <AppointmentUser>
            <Username>Dr Edilson Soares</Username>
            <Specialization>Psicólogo Clínico</Specialization>
            <Notation>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Notation>
          </AppointmentUser>

          <AppointmentLocation>
            <p>Endereço de atendimento</p>
            <p>Bahia, Brasil -Feira de Santana</p>
          </AppointmentLocation>
        </AppointmentUserWrapper>
        <AppointmentCalendar>
          <div className="currentWeek">
            <span>
              <i className="fa fa-calendar"></i> 03 Junho de 2021
            </span>
            <div className="calendarnav">
              <button type="button" className="prev">
                Anterior
              </button>
              <button type="button" className="next">
                Próxima
              </button>
            </div>
          </div>

          <div className="calendarWrapper">
            <div className="calendarWeek">
              <ul>
                <li>
                  Seg.<p>01</p>
                </li>
                <li>
                  Ter.<p>02</p>
                </li>
                <li>
                  Qua.<p>03</p>
                </li>
                <li>
                  Qui.<p>04</p>
                </li>
                <li>
                  Sex.<p>05</p>
                </li>
                <li>
                  Sab.<p>06</p>
                </li>
                <li>
                  Dom.<p>07</p>
                </li>
              </ul>
            </div>

            <div className="calendarHours">
              <ul>
                {/*segunda */}
                <li>
                  <ul>
                    <li>08:00</li>
                    <li>08:15</li>
                    <li>08:30</li>
                    <li>08:45</li>
                    <li>09:00</li>
                    <li>09:15</li>
                    <li>09:30</li>
                  </ul>
                </li>
                {/*terça */}
                <li>
                  <ul>
                    <li>08:00</li>
                    <li>08:15</li>
                    <li>08:30</li>
                    <li className="empty"></li>
                    <li>09:00</li>
                    <li>09:15</li>
                    <li>09:30</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>08:00</li>
                    <li>08:15</li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li>09:15</li>
                    <li>09:30</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="empty"></li>
                    <li>08:15</li>
                    <li>08:30</li>
                    <li>08:45</li>
                    <li>09:00</li>
                    <li>09:15</li>
                    <li>09:30</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                    <li className="empty"></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="calendarButtons">
            <button className="seeMore" type="button">
              Ver agendamento
            </button>
            <button className="validation" type="button">
              Angendar
            </button>
          </div>
        </AppointmentCalendar>
      </AppointmentPopup>
      <Footer>
        Marcelo<b>Developer</b>
      </Footer>
    </Container>
  );
}
