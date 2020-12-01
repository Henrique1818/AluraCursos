## A evolução do host de aplicações
Antigamente, quando queríamos montar o nosso sistema, com vários serviços (bancos de dados, proxy, etc) e aplicações, acabávamos tendo vários servidores físicos, cada um com um serviço ou aplicação do nosso sistema, por exemplo:

### Um serviço em cada servidor

E claro, não conseguimos instalar os serviços diretamente no hardware do servidor, ou seja, precisamos de um intermediário entre as aplicações e o hardware, que é o sistema operacional. Ou seja, devemos instalar sistemas operacionais em cada servidor, e os sistemas poderiam ser diferentes:

## Um sistema operacional em cada servidor

E se quisermos que uma aplicação se comunique com outra ou faça qualquer comunicação externa, devemos conectar os servidores à rede. Além disso, para eles funcionarem, precisamos ligá-los à eletricidade. Logo, havia diversos custos de eletricidade, rede e configuração dos servidores.

Além disso, o processo era lento, já que a cada nova aplicação, deveríamos comprar/montar o servidor físico, instalar o sistema operacional, configurá-lo e subir a aplicação.

### Capacidade pouco aproveitada
O que foi falado anteriormente não era o único problema desse tipo de arquitetura. Era muito comum termos servidores parrudos, com uma única aplicação sendo executada, para normalmente ficarem funcionando abaixo da sua capacidade, para quando for necessário, o servidor aguentar uma grande quantidade de acessos. Isso resultava em muita capacidade ociosa nos servidores, com muitos recursos desperdiçados.

### Virtualização, uma solução?
Para fugir desses problemas de servidores ociosos e alto tempo e custo de subir e manter aplicações em servidores físicos, surgiu como solução a virtualização, surgindo assim as máquinas virtuais.

As máquinas virtuais foram possíveis de ser criadas graças a uma tecnologia chamada Hypervisor, que funciona em cima do sistema operacional, permitindo a virtualização dos recursos físicos do nosso sistema. Assim, criamos uma máquina virtual que tem acesso a uma parte do nosso HD, memória RAM e CPU, criando um computador dentro de outro:

## Máquina virtual

E se temos uma máquina virtual que está acessando uma parte do nosso hardware como um todo, conseguimos colocar dentro dela uma das nossas aplicações. E replicar isso, criando mais máquinas virtuais com outras aplicações:

## Máquina virtual com aplicações

Assim, reduzimos a quantidade de servidores e consequentemente os custos com luz e rede. Além disso, dividimos melhor o nosso hardware, aproveitando melhor os seus recursos e diminuindo a ociosidade.

### Problemas das máquinas virtuais
Apesar de resolver os problemas do uso de vários servidores físicos, as máquinas virtuais também possuem problemas. Para podermos hospedar a nossa aplicação em uma máquina virtual, também precisamos instalar um sistema operacional nela:

## Máquina virtual com aplicações

Cada aplicação necessita de um sistema operacional para poder ser executada, e esses sistemas podem ser diferentes. E apesar dos sistemas operacionais serem um software, eles possuem um custo de memória RAM, disco e processamento. Ou seja, precisamos de uma capacidade mínima para manter as funcionalidades de um sistema operacional, aumentando o seu custo de manutenção a cada sistema que tivermos.

Além disso, há um custo de configuração, isto é, liberar portas, instalar alguma biblioteca específica, etc, toda uma configuração que um sistema operacional pede. Também devemos sempre estar atentos à sua segurança, mantendo o sistema de cada máquina virtual sempre atualizado.

Muitas vezes, o tempo voltado para a manutenção das máquinas virtuais era o mesmo tempo voltado para a nossa aplicação em si. Ou seja, acabávamos dividindo o valor da nossa empresa, ao invés de focar somente nas aplicações, dividíamos o trabalho com a manutenção dos sistemas operacionais.