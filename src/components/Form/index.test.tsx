import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from ".";
import { RecoilRoot } from "recoil";
import { act } from "@testing-library/react";

describe("Comportamento do Form", () => {
    test("Quando o input está vazio novos participantes não podem ser adicionados", () => {
        render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
        );
      
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira o nome do participante");
      
        //encontrar o botão
        const button = screen.getByRole("button");
      
        //garantir que o input esteja no documento
        expect(input).toBeInTheDocument();
      
        //garantir que o botão esteja desabilitado
        expect(button).toBeDisabled();
      });
      
      test("adicionar um participante caso exista um nome preenchido", () => {
        render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
        );
      
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira o nome do participante");
      
        //encontrar o botão
        const button = screen.getByRole("button");
      
        // inserir um valor no input
        fireEvent.change(input, {
          target: {
            value: "Ana Catarina",
          },
        });
      
        //clicar no botao de submeter
        fireEvent.click(button);
      
        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();
        //garantir que o input nao tenha um valor
        expect(input).toHaveValue("");
      });
      
      test("Nomes duplicados não podem ser adicionados na lista", () => {
          render(
              <RecoilRoot>
                <Formulario />
              </RecoilRoot>
            );
          
            //encontrar no DOM o input
            const input = screen.getByPlaceholderText("Insira o nome do participante");
          
            //encontrar o botão
            const button = screen.getByRole("button");
      
            fireEvent.change(input, {
              target: {
                value: "Ana Catarina",
              },
            });
      
            fireEvent.click(button);
      
            fireEvent.change(input, {
              target: {
                value: "Ana Catarina",
              },
            });
      
            fireEvent.click(button);
      
            const errorMessage = screen.getByRole("alert");
      
            expect(errorMessage.textContent).toBe("Nomes duplicados não são permitidos!")
      
          
      
          
      })
      
      test("A mensagem de erro deve sumir após 3 segundos", () => {
          jest.useFakeTimers();
          
          render(
              <RecoilRoot>
                <Formulario />
              </RecoilRoot>
            );
          
            //encontrar no DOM o input
            const input = screen.getByPlaceholderText("Insira o nome do participante");
          
            //encontrar o botão
            const button = screen.getByRole("button");
      
            fireEvent.change(input, {
              target: {
                value: "Ana Catarina",
              },
            });
      
            fireEvent.click(button);
      
            fireEvent.change(input, {
              target: {
                value: "Ana Catarina",
              },
            });
      
            fireEvent.click(button);
      
            let errorMessage = screen.queryByRole("alert");
      
            expect(errorMessage).toBeInTheDocument();
            //experar N segundos
            act(() => {
              jest.runAllTimers()
            })
      
            errorMessage = screen.queryByRole('alert');
            expect(errorMessage).toBeNull();
          
      
          
      })
      
      
})

