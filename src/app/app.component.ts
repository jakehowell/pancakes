import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pancakeArray;
  stack = '';
  output = '';

  process() {
    var $this = this;
    var lines = this.stack.split(/\n/);
    var testCases = lines.shift();
    
    $this.output = '';

    if(!testCases.match(/^\d+$/)){
      $this.output = $this.output.concat('First line must be an integer.');
      return;
    }
    
    lines.forEach(function(line, index) {
      var caseNum = index + 1;

      if(line.match(/[^\+\-]/g)) {
        $this.output = $this.output.concat('Case #' + caseNum + ': Invalid input\n');
        return;
      }

      if(line.length > 100) {
        $this.output = $this.output.concat('Case #' + caseNum + ': Dataset is too long\n')
        return;
      }

      if(line.length < 1) {
        $this.output = $this.output.concat('Case #' + caseNum + ': Empty dataset\n')
        return;
      }

      var groups = line.split(/(\++|\-+)/).filter(function(item) { return item !== ''; });
      var flips = 0;

      while(groups.length > 1) {
        var first = groups.shift();
        first = $this._reverse(first);
        first = $this._flip(first);
        groups[0] = first.concat(groups[0]);
        flips++;
      }

      if(groups[0].indexOf('+') == -1){
        groups[0] = $this._flip(groups[0]);
        flips++;
      }

      $this.output = $this.output.concat('Case #' + caseNum + ': ' + flips + '\n');

    });
  }

  _reverse(str) {
    return str.split('').reverse().join('');
  }

  _flip(group) {
    return group[0] == '+' ? group.replace(/\+/g,'-') : group.replace(/\-/g,'+');
  }

  _checkIfValid(line) {

  }
}
