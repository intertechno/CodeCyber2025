Console.WriteLine("AzureKeyVaultReader application starting.");

// access the Azure Key Vault using an app registration: client ID, tenant ID, and client secret
string clientId = "...";
string tenantId = "...";
string clientSecret = "...";
string keyVaultUrl = "https://nnn.vault.azure.net/";

// start accessing the Key Vault
Azure.Identity.ClientSecretCredential credential = new(tenantId, clientId, clientSecret);
Azure.Security.KeyVault.Secrets.SecretClient client = new(new Uri(keyVaultUrl), credential);
try
{
    // retrieve a secret from the Key Vault
    string secretName = "MyDemoSecret";
    Azure.Response<Azure.Security.KeyVault.Secrets.KeyVaultSecret> secret = client.GetSecret(secretName);

    Console.WriteLine($"Retrieved secret: {secret.Value.Value}");
}
catch (Azure.RequestFailedException ex)
{
    Console.WriteLine($"Error retrieving secret: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"An unexpected error occurred: {ex.Message}");
}

Console.WriteLine("AzureKeyVaultReader application completed.");
