import { Controller, Get, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { Roles, RolesGuard } from '@ubs-platform/users-mona-roles';
import { JwtAuthGuard } from '@ubs-platform/users-mona-microservice-helper';
import { BaseSimpleControllerBuilder } from './controller/base/base-simple.controller';

const kafkef =
  '\n' +
  '                                                                               \n' +
  '                                     .:=##%+#*.+=-..                                      \n' +
  '                                  .:=%@@@@@@@@*+@%#%#=:.                                  \n' +
  '                                 -*%@@@@@@@@@@@%%@@@@@@*+-                                \n' +
  '                               :+%@@@@@@@@@@@@@@@@@@@@@@%%*:                              \n' +
  '                            ..=%@@@@@@@@@@@@@@@@@@@@@@@@@@%*                              \n' +
  '                             :*%@@@@@@@@@@@@@@@@@@#+=+++=+++-                             \n' +
  '                             -+==-..   .*%@@@@@@@%*::--==-..=:                            \n' +
  '                            .:  .=+**+#%@@@@@@@@@@@@@@@@@@@* :   .                        \n' +
  '                           ....=%@@@@@@@@@@@@@@@@@@%%*+*#%@@#:. .                         \n' +
  '                           .:.#@@%*+--*%%@@@@@@@@@%@@+=#*-+@@#-                           \n' +
  '                           ..+@@%=#@*#@@@@@@@@@@@@@@@@@@@@@@@@#                           \n' +
  '                           .=@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@%-                          \n' +
  '                           :+%@@@@@@@@@@@@*@@@@@@@@@@@@@@@@@@@@+ *:                       \n' +
  '                       :*:  +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@* #+                       \n' +
  '                       +@=  *@@@@@@@@@@@@@@**#%#+%@@@@@@@@@@@@@= %@                       \n' +
  '                       +@@  =@@@@@@@@@@@#+-::*%+.::+%@@@@@@@@@@:.@#                       \n' +
  '                       -@@: .%@@@@@@@%=::=-=*+#+%#*=:.-+@@@@@@% +@=                       \n' +
  '                        *@=  #@@@@@@- -=@@@@@@@@@@@@@#. .%@@@@# %#.                       \n' +
  '                         +%  *@@@@@*=#@@###%%@%@%@%##%@#-#@@@@+ ++                        \n' +
  '                         :=  +@@@@#+%@@@@@@@@@%@@@@@@@@@*#@@@@=                           \n' +
  '                             :@@@%=.*@@@@@*.:    -+@@@@@:*@@@*.                           \n' +
  '                              =%@@:.+#@@@@@*.  . :*@@%*+ :#+.                             \n' +
  '                               ..:   ::+++*+-: ===++--.                                   \n' +
  '                                        . :=**:::=:                                       \n' +
  '                                           . ..                                           \n' +
  '                             .                                                            \n' +
  '                            :.                                                            \n' +
  '                            :-===:             .      :+*=*                               \n' +
  '                            .#@@@##+--=--===+%#-+:..:-%@@@#                               \n' +
  '                            .#@%@@@@%@@@@@@@@@%%##*+@@@@@@=                               \n' +
  '                             *@@@@@@@@@@@@@@@@@@@@@@@@@@@%=-                              \n' +
  '                           . +%@@@@@@@@@@@@@@@@@@@@@@@@@@++.                              \n' +
  '                           :.+%@@@@@@@@@@@@@@@@@@@@@@@@@%=.                               \n' +
  '                             +%@@@@@@@@@@@@@@@@@@@@@@@@@#.                                \n' +
  '                             .*@@@@@@@@@@@@@@@@@@@@@@@%=                                  \n' +
  '                               .=#@@@@@@@@@@@@@@@@%*+:                                    \n' +
  '                                  .-+*#%%%%%##*=-:       \n' +
  ' #####     ###     #####    #####   ####       ###     #####    ######  ##   ##  \n' +
  '##   ##   ## ##   ##   ##  ### ###   ##       ## ##   ##   ##     ##    ###  ##  \n' +
  '##       ##   ##  ##       ##   ##   ##      ##   ##  ##          ##    #### ##  \n' +
  ' #####   ##   ##  ## ####  ##   ##   ##      ##   ##   #####      ##    #######  \n' +
  '     ##  #######  ##   ##  ##   ##   ##      #######       ##     ##    ## ####  \n' +
  '##   ##  ##   ##  ##   ##  ### ###   ##  ##  ##   ##  ##   ##     ##    ##  ###  \n' +
  ' #####   ##   ##   #####    #####   #######  ##   ##   #####    ######  ##   ##  \n' +
  '                                                                                 \n' +
  '  \n';
@Controller()
export class AppController extends BaseSimpleControllerBuilder(true, kafkef) {
  // constructor(private readonly appService: AppService) {}
  // @Get()
  // @Roles(['ADMIN'])
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // getData() {
  //   return this.appService.getData();
  // }
}
