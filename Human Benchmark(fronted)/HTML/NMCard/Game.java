import java.util.Random;
import java.util.Scanner;
public class Game {
    public static void main(String[] args) {
        boolean result = true;
        int range = 1;
        Random random = new Random();
        int count=0;
        Scanner sc=new Scanner(System.in);
        while (result == true) {
            range = range * 10;
            int Randomnumber = random.nextInt(range);
            System.out.println("SO THE RANDOM NUMBER IS :" + Randomnumber);
            System.out.println("ENTER YOUR NUMBER:");
            int Usernumber=sc.nextInt();
            
            if(Randomnumber != Usernumber){
                result=false;
                System.out.println("SORRY BUT YOU FAILED TO REMEMBER THE NUMBER!! AND YOU PASSED "+count+" LEVEL");
            }
            count++;
        }
    }
}