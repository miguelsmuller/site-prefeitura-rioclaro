import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: string): unknown {
    if (value) {
      const differenceInSeconds = Math.floor((+new Date() - +new Date(value)) / 1000);

      if (differenceInSeconds < 30) {
        return 'Agora';
      }

      const timeIntervals = [
        { diff: 31536000, desc: 'Ano', descPlural: 'Anos' },
        { diff: 2592000, desc: 'Mês', descPlural: 'Mesês' },
        { diff: 604800, desc: 'Semana', descPlural: 'Semanas' },
        { diff: 86400, desc: 'Dia', descPlural: 'Dias' },
        { diff: 3600, desc: 'Hora', descPlural: 'Horas' },
        { diff: 60, desc: 'Minuto', descPlural: 'Minutos' },
        { diff: 1, desc: 'Segundo', descPlural: 'Segundos' },
      ];

      let counter;

      for (const diff in timeIntervals) {
        if (timeIntervals.hasOwnProperty(diff)) {
          const element = timeIntervals[diff];
          counter = Math.floor(differenceInSeconds / element.diff);

          if (counter > 0) {
            if (counter === 1) {
              return counter + ' ' + element.desc + ' atrás';
            } else {
              return counter + ' ' + element.descPlural + ' atrás';
            }
          }
        }
      }
    }
    return value;
  }
}
