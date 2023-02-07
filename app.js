
import java.io.*;
import java.util.HashMap;
import java.util.Map;


public class Module2Poem {
    public static void main(String[] args) throws IOException {
           File file = new File("C:\\Users\\j_rm7\\eclipse-workspace\\SoftwareDevelopment\\src\\module2poem\\RavenPoem");
            BufferedReader br = new BufferedReader(new FileReader(file));
        String line;
        Map<String, Long> counts = new HashMap<>();
        while ((line = br.readLine()) != null) {
                    String[] words = line.split("[\\s.;,?:!()\"]+");
            for (String word : words) {
                word = word.trim();
                if (word.length() > 0) {
                    if (counts.containsKey(word)) {
                        counts.put(word, counts.get(word) + 1);
                    } else {
                        counts.put(word, 1L);
                    }
                }
            }
        }
        for (Map.Entry<String, Long> entry : counts.entrySet()) {
        	
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
      
    }
}