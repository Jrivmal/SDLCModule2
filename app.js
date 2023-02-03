import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Module2Poem {

	public static void main (String []args) throws FileNotFoundException {
		File file = new File("C:\\Users\\j_rm7\\eclipse-workspace\\SoftwareDevelopment\\src\\module2poem\\RavenPoem");
		Scanner scan = new Scanner(file);
		
		scan.useDelimiter("[^A-Za-z]+");
		
		while(scan.hasNextLine()) {
		
			System.out.println(scan.next());
			
		}
		