import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CSVReader {
    public static void main(String[] args) {
        String csvFile = "data.csv";  // Update this with your file path
        String line;
        List<String[]> data = new ArrayList<>();
        
        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                if (values.length > 0) {
                    data.add(values);
                }
            }
            
            Collections.sort(data, (a, b) -> a[1].compareTo(b[1]));  // Sort based on the first column
            
            StringBuilder result = new StringBuilder();
            StringBuilder taboo = new StringBuilder();
            
            for (String[] values : data) {
                result.append("").append(values[2]).append(", ");
                taboo.append("'").append(values[1]).append(", ");
            }
            
            if (result.length() > 0) {
                result.setLength(result.length() - 2);
            }
            if (taboo.length() > 0) {
                taboo.setLength(taboo.length() - 2);
            }
            
            System.out.println(result.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
