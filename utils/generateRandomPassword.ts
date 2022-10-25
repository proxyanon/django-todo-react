export function generateRandomPassword(pwd_length: number): string {
    
    let string = "abcdefghijklmnopqrstuvwxyz"; // to upper chars
    let numeric = "0123456789";
    let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let entity1 = 0;
    let entity2 = 0;
    let entity3 = 0;

    let hold = "";

    let character = "";
    let password = "";

    while( password.length<pwd_length ) {
        
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        
        password = character;

    }

    password=password.split('').sort(() => { return 0.5-Math.random() }).join('');
    return password.substr(0,pwd_length);

}
